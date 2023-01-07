import { motion } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { ReactNode } from 'react';

const defaultTransition = { duration: 0.5, delay: 0.1 };

type Props = {
  children: ReactNode;
  transition?: typeof defaultTransition;
};

export const FadeOnView = ({
  children,
  transition = defaultTransition,
}: Props) => {
  const MotionDiv = motion(chakra.div);
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={transition}
    >
      {children}
    </MotionDiv>
  );
};
