export default async function VerifyActorPage({
  params,
}: {
  params: Promise<{ userId: string }>
  }) {
  
  const { userId } = await params;
  
  return <>
  Hello {userId}
</>
}