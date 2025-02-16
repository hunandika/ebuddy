import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export default function ActionContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CardContainer = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  }));

  return <CardContainer>{children}</CardContainer>;
}
