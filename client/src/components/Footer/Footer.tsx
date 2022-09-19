import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

const Footer = ({
  buttonText,
  navigateTo = '',
  onClickCallback,
}: {
  buttonText: string;
  navigateTo?: string;
  onClickCallback?: () => void;
}) => {
  return (
    <footer className="flex justify-center">
      <div className="flex flex-end">
        <Link href={navigateTo} className="footer-link">
          <Button variant="contained" className="bg-cyan-300" onClick={() => onClickCallback && onClickCallback()}>
            {buttonText}
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
