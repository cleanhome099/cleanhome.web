import {
  Avatar,
  Box,
  Card,
  Group,
  Rating,
  Text, Title
} from "@mantine/core";
import { motion } from 'framer-motion';
import styles from './Testimonials.module.scss';
import { useTranslation } from "react-i18next";
import Evgeniya from './Evgeniya.png'
import Victoria from './Victoria.png'
import Valoree from './Valoree.png'

const testimonials = [
  {
    name: 'Victoria Brann-Cummings',
    avatar: Victoria,
    rating: 5,
    text: 'Our family has entrusted them for many, many years in our homes and businesses. There\'s something about walking into a clean house that just helps melt stress and exhaustion away! Excellent...',
  },
  {
    name: 'Evgeniya O\'Leary\n',
    avatar: Evgeniya,
    rating: 5,
    text: "Great housecleaning services, fast and reliable. Competitive prices. Highly recommended",
  },
  {
    name: 'Valoree Lalime',
    avatar: Valoree,
    rating: 5,
    text: 'Very good service and lots of experience. You should give them a try!',
  },
];

export const  Testimonials = () => {
  const { t } = useTranslation();
  return (
    <Box className={styles.testimonials}>
        <Title order={5} mb="sm">
          {t("common.peopleLoveUs")}
        </Title>
        <Box className={styles.content}>
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            <Card shadow="lg" radius="lg" padding="lg" bg="none" w={300} >
              <Group mb="sm">
                <Avatar src={t.avatar} alt={t.name} radius="xl" />
                <div>
                  <Text size="sm" fw={600}>{t.name}</Text>
                  <Rating value={t.rating} readOnly size="xs"  color="hsl(43, 100%, 68%)"/>
                </div>
              </Group>
              <Text size="sm" c="dimmed">
                {t.text}
              </Text>
            </Card>
          </motion.div>
        ))}
        </Box>
      </Box>
  );
}
