const CheckCircle = ({ className }: { className?: string }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" className={className}>
    <path
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm16.28-2.72a.75.75 0 00-1.06-1.06l-5.97 5.97-2.47-2.47a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l6.5-6.5z"
    />
  </svg>
);
export default CheckCircle;
