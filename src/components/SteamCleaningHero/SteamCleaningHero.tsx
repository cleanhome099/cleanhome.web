"use client";

import { IconCheck, IconPhone, IconMail, IconWorld, IconSpray } from "@tabler/icons-react";
import styles from "./SteamCleaningHero.module.scss";

export const SteamCleaningHero = ()=> {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.contentLeft}>
            <div className={styles.headerSection}>
              <h1 className={styles.title}>
                Steam Cleaning <span className={styles.titleAccent}>Service</span>
              </h1>
              <p className={styles.subtitle}>
                Refresh and deeply sanitize your home with our professional steam cleaning.
              </p>
            </div>

            {/* Services List */}
            <div className={styles.servicesList}>
              <ServiceItem text="Kitchen – grease and residue removal" />
              <ServiceItem text="Bathroom – tiles, grout, showers, tubs disinfected" />
              <ServiceItem text="Floors – deep steam cleaning for all surfaces" />
              <ServiceItem text="Upholstery – safe, eco-friendly treatment" />
            </div>

            {/* Highlights */}
            <div className={styles.highlights}>
              <Highlight text="Eco-friendly, chemical-free, safe for kids & pets." />
              <Highlight text="Ideal for kitchens, bathrooms, and high-traffic areas." />
            </div>

            {/* Contact Info */}
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <IconPhone size={20} />
                <span className={styles.contactText}>
                  Call or Text: <strong>832-883-7460</strong>
                </span>
              </div>
              <div className={styles.contactItem}>
                <IconMail size={20} />
                <span className={styles.contactText}>cleanhomehouston@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <IconWorld size={20} />
                <span className={styles.contactText}>www.houstoncleanhome.com</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <div className={styles.imageBox}>
              <img
                className={styles.image}
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ad302b6f9f-14b7921b257139eb5b03.png"
                alt="Professional steam cleaning bathroom tiles"
              />
              <div className={styles.overlay}></div>
            </div>

            {/* Floating Card */}
            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <IconSpray size={24} color="white" />
              </div>
              <div>
                <div className={styles.floatingTitle}>Professional Grade</div>
                <div className={styles.floatingSubtitle}>Steam Equipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ✅ Subcomponents */
function ServiceItem({ text }: { text: string }) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.checkIcon}>
        <IconCheck size={16} color="white" />
      </div>
      <span className={styles.serviceText}>{text}</span>
    </div>
  );
}

function Highlight({ text }: { text: string }) {
  return (
    <div className={styles.highlightItem}>
      <span className={styles.highlightIcon}>✨</span>
      <span className={styles.highlightText}>{text}</span>
    </div>
  );
}
