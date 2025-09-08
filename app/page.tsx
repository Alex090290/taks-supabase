import bcrypt from "bcryptjs";
import LandingPage from "./LandingPage";

async function Home() {
  const hashedPassword = await bcrypt.hash("1234", 10);
  console.log(hashedPassword);
  return <LandingPage />;
}

export default Home;
