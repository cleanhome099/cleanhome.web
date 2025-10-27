import { motion } from "framer-motion";
import { Button } from "@mantine/core";
import {
  IconHome,
  IconBuilding,
  IconTools,
  IconBriefcase,
  IconBuildingStore,
  IconWindow,
  IconSpray,
  IconSofa, IconPhone, IconMail, IconWorld
} from "@tabler/icons-react";
import styles from "./CleaningServices.module.scss";
import { SteamCleaningHero } from "../SteamCleaningHero/SteamCleaningHero";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ExtraServices } from "../ExtraServices/ExtraServices";

export const CleaningServices = () => {
  const navigate = useNavigate();
  const handleBook = () => navigate(`/services/booking/1`)
  return (
    <div className={styles.wrapper}>
      <ExtraServices/>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <div>
            <h1 className={styles.heroTitle}>
              Professional Cleaning Services for Every Need
            </h1>
            <p className={styles.heroSubtitle}>
              From residential to commercial, we provide comprehensive cleaning
              solutions with attention to detail and eco-friendly practices.
            </p>
            <div className={styles.heroButtons}>
              <Button size="lg" variant="white" color="blue" onClick={handleBook}>
                Book Now
              </Button>
            </div>
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

          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              className={styles.heroImage}
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/68358c23bb-fa549ebdbc6813ec014e.png"
              alt="Professional cleaning team in action"
            />
          </motion.div>
        </div>
      </section>
      <SteamCleaningHero/>
      {/* SERVICES */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>Our Cleaning Services</h2>
            <p>
              We offer a comprehensive range of professional cleaning services
              tailored to meet your specific needs, whether residential or
              commercial.
            </p>
          </div>

          {/* Residential */}
          <div className={styles.serviceBlock}>
            <h3 style={{marginBottom: 10}}>Residential Services</h3>
            <div className={styles.cardsGrid}>
              <ServiceCard
                icon={<IconHome size={24} />}
                title="House Cleaning"
                image="https://storage.googleapis.com/uxpilot-auth.appspot.com/68358c23bb-fa549ebdbc6813ec014e.png"
                description="Complete home cleaning including dusting, vacuuming, mopping, and sanitizing all rooms."
                features={[
                  "All rooms deep cleaned",
                  "Kitchen and bathroom sanitization",
                  "Floor care and maintenance",
                  "Weekly/bi-weekly schedules",
                ]}
              />
              <ServiceCard
                icon={<IconBuilding size={24} />}
                title="Apartment Cleaning"
                image="https://storage.googleapis.com/uxpilot-auth.appspot.com/c594684f5b-5a770cc339de94502629.png"
                description="Specialized cleaning for apartments and condos with flexible scheduling options."
                features={[
                  "Compact space optimization",
                  "Quick turnaround times",
                  "Eco-friendly products",
                  "Move-in/move-out cleaning",
                ]}
              />
              <ServiceCard
                icon={<IconTools size={24} />}
                title="Deep Cleaning"
                image="https://storage.googleapis.com/uxpilot-auth.appspot.com/5beecd9c30-459a5fadce9f11bcee7e.png"
                description="Intensive cleaning service targeting hard-to-reach areas and built-up grime."
                features={[
                  "Behind appliances cleaning",
                  "Baseboards and ceiling fans",
                  "Window sills and tracks",
                  "Grout and tile restoration",
                ]}
              />
            </div>
          </div>

          {/* Commercial */}
          <div className={styles.serviceBlock}>
            <h3 style={{marginBottom: 10}}>Commercial Services</h3>
            <div className={styles.cardsGrid}>
              <ServiceCard
                icon={<IconBriefcase size={24} />}
                title="Office Cleaning"
                image="https://storage.googleapis.com/uxpilot-auth.appspot.com/be876e5f45-37dd3c7916612d465cf6.png"
                description="Professional office cleaning maintaining a productive work environment."
                features={[
                  "Daily/weekly schedules",
                  "Desk and workstation cleaning",
                  "Conference room maintenance",
                  "Restroom sanitization",
                ]}
              />
              <ServiceCard
                icon={<IconBuildingStore size={24} />}
                title="Retail Cleaning"
                image="https://storage.googleapis.com/uxpilot-auth.appspot.com/ea16835660-fe014ccab1b22a7e5925.png"
                description="Retail space cleaning focused on customer experience and safety."
                features={[
                  "High-traffic area focus",
                  "Display case cleaning",
                  "Fitting room sanitization",
                  "After-hours service",
                ]}
              />
              <ServiceCard
                icon={<IconTools size={24} />}
                title="Restaurant Cleaning"
                image="https://storage.googleapis.com/uxpilot-auth.appspot.com/1a0946201c-8f33a9317a28d28d668a.png"
                description="Food service cleaning meeting health department standards."
                features={[
                  "Kitchen deep cleaning",
                  "Grease trap maintenance",
                  "Dining area sanitization",
                  "Health code compliance",
                ]}
              />
            </div>
          </div>

          {/* Specialized */}
          <div className={styles.serviceBlock}>
            <h3>Specialized Services</h3>
            <div className={styles.cardsGrid}>
              <ServiceCard
                icon={<IconTools size={24} />}
                title="Carpet Cleaning"
                description="Steam cleaning and stain removal for all carpet types."
              />
              <ServiceCard
                icon={<IconWindow size={24} />}
                title="Window Cleaning"
                description="Interior and exterior window cleaning for crystal clear views."
              />
              <ServiceCard
                icon={<IconSpray size={24} />}
                title="Pressure Washing"
                description="Exterior surface cleaning for driveways, sidewalks, and buildings."
              />
              <ServiceCard
                icon={<IconSofa size={24} />}
                title="Upholstery Care"
                description="Professional furniture cleaning and fabric protection services."
              />
            </div>
          </div>
        </div>
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
            <span className={styles.contactText}>www.houstoncleanhome.com/</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// Card component
export function ServiceCard({
                       icon,
                       title,
                       description,
                       image,
                       features,
                     }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  features?: string[];
}) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {image && <img src={image} alt={title} className={styles.cardImage} />}
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span className={styles.cardIcon}>{icon}</span>
          <h4>{title}</h4>
        </div>
        <p>{description}</p>
        {features && (
          <ul>
            {features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
