import CountdownTimer from "../components/CountdownTimer";
export default function TimerSection() {
  return (
    <>
      <section className="width-[100vh] flex flex-col justify-center font-[vt323]">
        <p className="text-[#F21212] text-[60px] mb-0">Hurry Up</p>
        <p className="text-[36px] text-[#9D44C0]">Hacking ends in</p>
        <CountdownTimer targetDate={"aug 24, 2024 02:01:00"} />
      </section>
    </>
  );
}

