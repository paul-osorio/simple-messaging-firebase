const useTimeAgo = () => {
  const timeAgo = (date: any) => {
    const seconds = Math.floor((new Date().getTime() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    interval = Math.floor(seconds / 604800);
    if (interval > 1) {
      return interval + "w";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + "d";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + "h";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + "m";
    }
    return Math.floor(seconds) + "s";
  };

  return timeAgo;
};

export default useTimeAgo;
