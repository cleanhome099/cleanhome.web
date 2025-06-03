import { TextInput, Textarea, Stack, Card, Center } from "@mantine/core";
import { IconAt, IconMessage, IconUser } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Button, PageHeader } from "../../components";
import { useTranslation } from "react-i18next";
import { Success } from "../booking/steps";
import emailjs from "@emailjs/browser";

export const Contacts = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    comment: "",
  });

  const [disabled, setDisabled] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const isValid =
      form.firstName.trim() !== "" &&
      form.email.trim() !== "" &&
      form.comment.trim() !== "";
    setDisabled(!isValid);
  }, [form]);

  const handleChange =
    (field: keyof typeof form) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [field]: e.target.value });
      };

  const handleSubmit = async () => {
    const templateParams = {
      first_name: form.firstName,
      email: form.email,
      comment: form.comment,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_CAREER_TEMPLATE_ID!,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      );
      setShowSuccess(true);
      setForm({ firstName: "", email: "", comment: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <Center h="100vh">
      <Stack gap="md">
        <PageHeader title={t("contacts.title")} text={t("contacts.text")} />
        {showSuccess && <Success />}
        {!showSuccess && (
          <Card w="100%" radius="lg" shadow="lg" withBorder>
            <TextInput
              label="Your Name"
              leftSection={<IconUser size={16} />}
              placeholder="Enter your name"
              value={form.firstName}
              onChange={handleChange("firstName")}
              required
              radius="lg"
              mb="md"
            />

            <TextInput
              label="Email"
              placeholder="Enter your email"
              leftSection={<IconAt size={16} />}
              value={form.email}
              onChange={handleChange("email")}
              required
              radius="lg"
              type="email"
              mb="md"
            />

            <Textarea
              label="Message"
              leftSection={<IconMessage size={16} />}
              placeholder="Write your feedback here..."
              value={form.comment}
              onChange={handleChange("comment")}
              required
              radius="lg"
              minRows={4}
              mb="md"
            />

            <Button onClick={handleSubmit} disabled={disabled} radius="lg" mt="lg">
              Send
            </Button>
          </Card>
        )}
      </Stack>
    </Center>
  );
};
