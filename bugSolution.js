```javascript
import { unstable_getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);

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
  } catch (error) {
    console.error('Error fetching session:', error);
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      }
    }
  }
}
```