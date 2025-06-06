import React from "react";
import { Container, Image, Stack, Text, Title } from "@mantine/core";
import styles from "./PageHeader.module.scss";
import Logo from "../../layout/logo.png";

export const PageHeader = ({title, text}: {title: string, text: string}) => (
  <Container size="sm" py="lg">
    <Stack align="center">
      <Image src={Logo} w={100}/>
      <Title className={styles.title} mb="sm" ta="center">
        {title}
      </Title>
      <Text mb="md" ta="center">
        {text}
      </Text>
    </Stack>
  </Container>
);