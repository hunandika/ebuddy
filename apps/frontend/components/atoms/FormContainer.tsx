import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export default function FormContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CardContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    margin: 'auto',
  }));

  return <CardContainer>{children}</CardContainer>;
}
