'use client';;

const Home = () => {
  const send = async () => {
    console.log("sssss")
    await fetch('/api/emails', {
      method: 'POST',
      body: JSON.stringify({
        email: 'tjarwan22@gmail.com',
        firstName: 'Tareq'
      })
    });
  }

  return (
    <main>
      <button onClick={send}>
        Send Email
      </button>
    </main>
  );
};

export default Home;
