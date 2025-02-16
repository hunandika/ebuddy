import UserFormComponent from '@/components/organisms/UserFormComponent';

export default async function EditForm({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  return <UserFormComponent id={id} />;
}
