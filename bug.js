```javascript
import { unstable_getServerSession } from 'next-auth';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
```