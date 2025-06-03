import React, { useState } from "react";
import { JobApplicationFormStep, PageHeader } from "../../components";
import { Center, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Success } from "../booking/steps";
import emailjs from "@emailjs/browser";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";

export const Career = () => {
  const { t } = useTranslation();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolio: "",
    coverLetter: "",
    comment: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    coverLetter: false,
  });

  const validate = () => {
    const newErrors = {
      firstName: !form.firstName.trim(),
      lastName: !form.lastName.trim(),
      email: !form.email.trim(),
      phone: !form.phone.trim(),
      coverLetter: !form.coverLetter.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_CAREER_TEMPLATE_ID!,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          email: form.email,
          phone: form.phone,
          portfolio: form.portfolio,
          cover_letter: form.coverLetter,
          comment: form.comment,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
      setShowSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      showNotification({
        title: "Error",
        message: "Submission failed. Please try again later.",
        color: "red",
        icon: <IconX size={16} />,
      });
    }
  };

  return (
    <Center pt="4rem">
      <Stack gap={2} align="center">
        <PageHeader title={t("career.title")} text={t("career.text")} />
        {showSuccess && <Success />}
        {!showSuccess && (
          <JobApplicationFormStep
            form={form}
            setForm={setForm}
            errors={errors}
            validate={validate}
            onSubmit={handleSubmit}
          />
        )}
      </Stack>
    </Center>
  );
};
