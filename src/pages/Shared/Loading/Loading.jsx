const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="spinner-ring spinner-primary"
        viewBox="25 25 50 50"
        strokeWidth="5"
      >
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
};
export default Loading;
