  import React, { useState } from "react";
  import Header from "./components/Header";
  import ProfileHeader from "./components/ProfileHeader";
  import Tabs from "./components/Tabs";
  import Intro from "./components/Intro";
  import Posts from "./components/Posts";
  import Friends from "./components/Friends";
  import Photos from "./components/Photos";
  import "./styles/App.css";

  const userData = {
    name: "Adham",
    profilePic: "/profileadam.jpg", 
    coverPhoto: "/coverprofiles.jpg",
    bio: "Loving life and coding!",
    city: "Pagadian City",
    work: "Wakoy trabahu",
    education: "Westprime College",
    friends: [
      { id: 1, name: "Junamie Adil Galabin", pic: "/junamie.jpg" },
      { id: 2, name: "Rochel Herongco", pic: "/rochel.jpg" },
      { id: 3, name: "Dev Caraballo", pic: "/devs.jpg" },
      { id: 4, name: "Mark Collado", pic: "/mark.jpg" },
      { id: 5, name: "Lyka beton", pic: "/lyka.jpg" },
      { id: 6, name: "Adham Damada Sahibul", pic: "/adhamdamada.jpg" },
    ],
    photos: ["/picture5.jpg", "/picture2.jpg", "picture3.jpg", "/picture4.jpg"],
    posts: [
      {
        id: 1,
        author: "Adham",
        profilePic: "/profileadam.jpg",
        timestamp: "2h",
        content: "Gikapoy nakoo, pero wamn gihapon moy kape/pake.",
      },
      {
        id: 2,
        author: "Adham",
        profilePic: "/profileadam.jpg",
        timestamp: "5h",
        content: "Sir makabuang maning subject nimo",
        image: "picture6.jpg",
      },
      {
        id: 3,
        author: "Adham",
        profilePic: "/profileadam.jpg",
        timestamp: "1d",
        content: "Tabanggg sir maluoy ka",
      },
    ],
  };

  const App = () => {
    const [activeTab, setActiveTab] = useState("Posts");

    const renderTabContent = () => {
      switch (activeTab) {
        case "Posts":
          return (
            <>
              <Intro {...userData} />
              <Photos photos={userData.photos} />
              <Friends friends={userData.friends} />
              <Posts posts={userData.posts} />
            </>
          );
        case "About":
          return <Intro {...userData} />;
        case "Friends":
          return <Friends friends={userData.friends} />;
        case "Photos":
          return <Photos photos={userData.photos} />;
        default:
          return (
            <div className="p-4 text-center text-gray-500">
              Content for {activeTab} tab.
            </div>
          );
      }
    };

    return (
      <div className="app-container">
        <Header />
        <main className="main-content">
          <ProfileHeader
            name={userData.name}
            profilePic={userData.profilePic}
            coverPhoto={userData.coverPhoto}
            friendsCount={userData.friends.length}
          />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="tab-content">{renderTabContent()}</div>
        </main>
      </div>
    );
  };

  export default App;
