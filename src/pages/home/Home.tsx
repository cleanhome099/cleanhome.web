import { motion } from "framer-motion";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./home.module.scss";
import { IHomeProps } from "./home.props";
import Avatar from "../../assets/logo512.png";
import { Button, Socials, Testimonials } from "../../components";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { Image } from "@mantine/core";

export const Home: FC<IHomeProps> = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [t("home.offer.deepCleaning"), t("home.offer.moveIn"), "Steam Cleaning"];
  return (
    <>
      <motion.section className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={styles.introWrapper}>
          <div className={styles.intro}>
            <Image h={190} src={Avatar} className={styles.home_img} />
            {/*<h1 className={styles.home_name}>{t("home.title")}</h1>*/}
            <span className={styles.education}>
            {t("home.offer.weOffer")}: <Typewriter
              words={steps}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
            <Socials />
            <Button buttonType="animate" onClick={() => navigate("/services")}>
              {t("home.bookOnline")}
            </Button>
          </div>
        </div>
        <Testimonials />
      </motion.section>
    </>
  );
};
