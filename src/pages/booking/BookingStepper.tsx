import { Card, Stack, Stepper, Group } from "@mantine/core";
import React, { useState } from "react";
import {
  DateSelectionStep,
  PersonalInfoStep,
  EmployeeSelectionStep,
  ReviewStep,
  Success
} from "./steps";
import { IconUser, IconCalendarEvent, IconUsers, IconClipboardList } from "@tabler/icons-react";
import styles from "./BookingStepper.module.scss";
import { motion } from "framer-motion";
import { BenefitsGrid, PageHeader } from "../../components";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const stepIconSize = 18;

export const BookingStepper = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    comment: "",
    dates: [],
    employees: ["any"],
  });

  const nextStep = async () => {
    if (active === 3) {
      try {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          process.env.REACT_APP_EMAILJS_ORDER_TEMPLATE_ID!,
          {
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            phone: form.phone,
            address: form.address,
            comment: form.comment,
            available_dates: form.dates.join(", "),
            preferred_employees: form.employees.join(", "),
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
        );
        setActive((current) => current + 1); // Success screen
      } catch (error) {
        console.error("EmailJS error", error);
        alert("Failed to submit the form. Please try again later.");
      }
    } else {
      setActive((current) => current + 1);
    }
  };
  const prevStep = () => setActive((current) => current - 1);
  const restart = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
      dates: [],
      employees: ["any"],
    });
    setActive(0);
  };

  const steps = [
    {
      label: "Your Info",
      icon: <IconUser size={stepIconSize} />,
      component: <PersonalInfoStep form={form} setForm={setForm} nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      label: "Choose Date",
      icon: <IconCalendarEvent size={stepIconSize} />,
      component: <DateSelectionStep form={form} setForm={setForm} nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      label: "Select Staff",
      icon: <IconUsers size={stepIconSize} />,
      component: <EmployeeSelectionStep form={form} setForm={setForm} nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      label: "Review",
      icon: <IconClipboardList size={stepIconSize} />,
      component: <ReviewStep form={form} prevStep={prevStep} nextStep={nextStep} />,
    },
  ];

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.wrapper}>
      <PageHeader  title={t("booking.title")}  text={t("contacts.text")}/>
      {active === 4 ? (
        <Success onSubmit={restart} />
      ) : (
        <Group gap="lg" justify="center" className={styles.groupResponsive}>
          <Stack w="45%" style={{minWidth: 350}}>
            <Stepper
              w="100%"
              active={active}
              onStepClick={setActive}
              size="xs"
              mb="lg"
              mt="lg"
              color="#6c6ce5"
              allowNextStepsSelect={false}
              orientation="horizontal">
              {steps.map((step, index) => (
                <Stepper.Step key={index} icon={step.icon} />
              ))}
            </Stepper>
            <Card radius="lg" shadow="lg" padding="lg">
              <div className={styles.stepContent}>{steps[active].component}</div>
            </Card>
          </Stack>
          <BenefitsGrid />
        </Group>
      )}
    </motion.section>
  );
};
