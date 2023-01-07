import { useEffect, useState, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = { children: ReactNode; speed: number };

export const Parallax = ({ children, speed }: Props) => {
  const [pageYOffset, setPageYOffSet] = useState(0);
  const handleScroll = () => setPageYOffSet(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset < 500) {
        setPageYOffSet(window.pageYOffset);
      }
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      transform={`translateY(${pageYOffset * speed}px)`}
      transitionDuration="400ms"
    >
      {children}
    </Box>
  );
};
