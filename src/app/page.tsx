import FunnelComponent from "@/components/funnel";
import UploadComponent from "@/components/upload";
import UserStoryComponent from "@/components/user-story";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      <FunnelComponent>
        <UserStoryComponent />
      </FunnelComponent>
    </main>
  );
}
