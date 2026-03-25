import { useState } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const EMERALD_700 = '#047857';
const EMERALD_800 = '#065f46';

const FAB_ICON_SX = {
  fontSize: 22,
  lineHeight: 1,
  display: 'block',
};

const CONTACT = {
  email: 'mailto:contato@puroseg.com.br',
  whatsapp: 'https://wa.me/5511999999999',
  instagram: 'https://www.instagram.com/puroseg',
};

const actions = [
  {
    icon: <MailOutlineIcon />,
    name: 'E-mail',
    onClick: () => {
      window.location.href = CONTACT.email;
    },
  },
  {
    icon: <WhatsAppIcon />,
    name: 'WhatsApp',
    onClick: () => {
      window.open(CONTACT.whatsapp, '_blank', 'noopener,noreferrer');
    },
  },
  {
    icon: <InstagramIcon />,
    name: 'Instagram',
    onClick: () => {
      window.open(CONTACT.instagram, '_blank', 'noopener,noreferrer');
    },
  },
];

export default function ContactSpeedDial() {
  const [open, setOpen] = useState(false);
  const [fabHover, setFabHover] = useState(false);

  const showTalkIcon = fabHover && !open;

  return (
    <SpeedDial
      ariaLabel="Abrir canais de contato"
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => {
        setOpen(false);
        setFabHover(false);
      }}
      icon={
        showTalkIcon ? (
          <PhoneInTalkIcon sx={FAB_ICON_SX} />
        ) : (
          <LocalPhoneIcon sx={FAB_ICON_SX} />
        )
      }
      direction="up"
      FabProps={{
        color: 'inherit',
        size: 'small',
        onMouseEnter: () => setFabHover(true),
        onMouseLeave: () => {
          if (!open) setFabHover(false);
        },
        sx: {
          boxShadow: 3,
          bgcolor: EMERALD_700,
          color: '#fff',
          '&:hover': { bgcolor: EMERALD_800 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: (theme) => theme.zIndex.speedDial,
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          onClick={action.onClick}
          slotProps={{
            tooltip: {
              title: action.name,
            },
          }}
        />
      ))}
    </SpeedDial>
  );
}
