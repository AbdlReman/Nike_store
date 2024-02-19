import { services } from "../constants";
import { ServiceCard } from "../components";
import { motion } from "framer-motion";
const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service, index) => (
        <motion.div
          key={service.label}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          custom={index}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
