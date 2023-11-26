import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

export default function Landing() {
  return (
    <div className="h-screen bg-white relative flex flex-col gap-5 items-center justify-center">
      <img
        src="./public/assets/commlead-logo-4x.png"
        alt="University of Washington Communication Leadership Logo"
        className="absolute"
      />
      <div className="z-40 text-center">
        <h1 className="text-9xl font-black font-encode">Kevin Laird</h1>
        <h2 className="text-5xl font-bold font-encode text-gray-950">
          Leadership Profile
        </h2>
      </div>
      <div className="animate-bounce-slow absolute bottom-0 pb-5">
        <KeyboardDoubleArrowDownRoundedIcon
          sx={{ fontSize: 72 }}
          color="action"
        />
      </div>
    </div>
  );
}
