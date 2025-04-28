// src/pages/ProfilePage.tsx
import ProfileCard from "../components/ProfileCard";

const ProfilePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="max-w-4xl w-full p-6 mt-20">
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
