import "./styles.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img
        src="https://masterpiecer-images.s3.yandex.net/7712fa0a6ff211eeadf9beb332dff282:upscaled"
        alt="Аватар"
        className="profile-avatar"
      />
      <h2 className="profile-name profile-text">Jane White</h2>
      <p className="profile-job profile-text">Hacker</p>
      <p className="profile-hobby profile-text">Travels</p>
    </div>
  );
}

export default ProfileCard;
