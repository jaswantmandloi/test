import WelcomeSection from "../Shared/Home/WelcomeSection";
import DeveloperItems from "../Shared/Home/DeveloperItems";
import IconList from "../Shared/Home/IconList";
import DownloadSample from "../Shared/Home/DownloadSample";
import DashboardTheme from "../Shared/Home/DashboardTheme";

function Home() {
  return (
    <div className="Home">
      <WelcomeSection />
      <DeveloperItems />
      {/* <IconList /> */}
      <DownloadSample />
      <DashboardTheme />
    </div>
  );
}

export default Home;
