import shepherd from "../../service/shepherd";

export const TermsInUsePage = () => {
  const handleRegisterDone = () => {
    localStorage.setItem("isOldUser", "true");
    shepherd.whip("test", "NewsletterPage");
  };
  return (
    <div className="Page">
      <p>Hello this is terms in use page.</p>

      <button
        className="BasicButton"
        onClick={() => {
          handleRegisterDone();
        }}
      >
        계속
      </button>
    </div>
  );
};
