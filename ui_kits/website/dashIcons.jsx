// FinSathi dashboard icon set — inline Lucide (24px grid, stroke 2, currentColor).
// Shared by DashboardNav.jsx and Dashboard.jsx via window.FsdIcons.

const fsdMakeIcon = (children, displayName) => {
  const Icon = ({ size = 16, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">{children}</svg>
  );
  Icon.displayName = displayName;
  return Icon;
};

const IcMic = fsdMakeIcon(<>
  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
  <line x1="12" x2="12" y1="19" y2="22"></line>
</>, "IcMic");

const IcCheck = fsdMakeIcon(<path d="M20 6 9 17l-5-5"></path>, "IcCheck");

const IcChevronDown = fsdMakeIcon(<path d="m6 9 6 6 6-6"></path>, "IcChevronDown");

const IcArrowRight = fsdMakeIcon(<><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></>, "IcArrowRight");

const IcArrowUpRight = fsdMakeIcon(<><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></>, "IcArrowUpRight");

const IcArrowDownLeft = fsdMakeIcon(<><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></>, "IcArrowDownLeft");

const IcGlobe = fsdMakeIcon(<>
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M2 12h20"></path>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</>, "IcGlobe");

const IcTarget = fsdMakeIcon(<>
  <circle cx="12" cy="12" r="10"></circle>
  <circle cx="12" cy="12" r="6"></circle>
  <circle cx="12" cy="12" r="2"></circle>
</>, "IcTarget");

const IcShieldCheck = fsdMakeIcon(<>
  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
  <path d="m9 12 2 2 4-4"></path>
</>, "IcShieldCheck");

const IcBookOpen = fsdMakeIcon(<>
  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</>, "IcBookOpen");

const IcBanknote = fsdMakeIcon(<>
  <rect width="20" height="12" x="2" y="6" rx="2"></rect>
  <circle cx="12" cy="12" r="2"></circle>
  <path d="M6 12h.01M18 12h.01"></path>
</>, "IcBanknote");

const IcReceipt = fsdMakeIcon(<>
  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
  <path d="M14 8H8"></path>
  <path d="M16 12H8"></path>
  <path d="M13 16H8"></path>
</>, "IcReceipt");

const IcSparkles = fsdMakeIcon(<>
  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
  <path d="M20 3v4"></path>
  <path d="M22 5h-4"></path>
</>, "IcSparkles");

const IcSend = fsdMakeIcon(<>
  <path d="m22 2-7 20-4-9-9-4Z"></path>
  <path d="M22 2 11 13"></path>
</>, "IcSend");

const IcGraduationCap = fsdMakeIcon(<>
  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
  <path d="M22 10v6"></path>
  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</>, "IcGraduationCap");

const IcTrendingUp = fsdMakeIcon(<>
  <path d="M22 7 13.5 15.5 8.5 10.5 2 17"></path>
  <path d="M16 7h6v6"></path>
</>, "IcTrendingUp");

window.FsdIcons = {
  IcMic, IcCheck, IcChevronDown, IcArrowRight, IcArrowUpRight, IcArrowDownLeft,
  IcGlobe, IcTarget, IcShieldCheck, IcBookOpen, IcBanknote, IcReceipt,
  IcSparkles, IcSend, IcGraduationCap, IcTrendingUp,
};
