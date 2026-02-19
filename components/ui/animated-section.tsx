"use client";

import { motion } from "framer-motion";

const cinematicTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15 * i,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: cinematicTransition,
  },
};

/** セクション全体をラップするシネマティックアニメーション */
export function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 56, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={cinematicTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** ヘッダー（Badge, h2, p）用のアニメーション */
export function AnimatedHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ ...cinematicTransition, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** 子要素をスタッガー表示するコンテナ */
export function AnimatedStaggerContainer({
  children,
  className = "",
  delayIndex = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayIndex?: number;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={delayIndex}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** スタッガーコンテナ内の子アイテム */
export function AnimatedStaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
