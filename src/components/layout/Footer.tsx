import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f0f0f] px-[var(--pad-global)] py-24 text-[13px] text-[#888]">
      <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-60" aria-hidden />
      <div className="f-container mx-auto grid max-w-[1800px] grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_1fr] lg:gap-20">
        <div className="f-left">
          <Link href="/" className="f-logo mb-8 block w-fit opacity-95 hover:opacity-100 transition-opacity">
            <img src="/logo-hommage.png" alt="Hommage Clinic" className="h-10 w-auto object-contain" width={180} height={44} />
          </Link>
          <div className="f-hours mb-8 border-l-2 border-[var(--hip-accent)]/50 pl-6">
            <h6 className="mb-4 text-[12px] tracking-[0.15em] text-[#999]">진료시간</h6>
            <ul className="space-y-2 text-[14px] leading-relaxed text-[#888]">
              <li>평일 AM 10:00 ~ PM 07:30</li>
              <li>토요일 AM 10:00 ~ PM 03:00</li>
              <li>일·공휴일 휴진</li>
            </ul>
          </div>
          <div className="f-info leading-relaxed mb-8">
            <p><strong>오마쥬 의원 (Hommage Clinic)</strong></p>
            <p>대표원장: 홍길동 | 사업자등록번호: 211-09-45027</p>
            <p>서울 강남구 도산대로 67길 13-5 Hommage 빌딩 전층</p>
            <p>T. 02-543-4842 | E. master@hommage.com</p>
          </div>
        </div>
        <div className="f-right grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-2">
          <div>
            <h6 className="mb-5 text-[12px] tracking-[0.15em] text-[#999]">MENU</h6>
            <ul className="space-y-2">
              <li><Link href="/#about" className="transition-colors hover:text-white">브랜드 철학</Link></li>
              <li><Link href="/#doctor" className="transition-colors hover:text-white">의료진 소개</Link></li>
              <li><Link href="/#map" className="transition-colors hover:text-white">오시는 길</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="mb-5 text-[12px] tracking-[0.15em] text-[#999]">CENTER</h6>
            <ul className="space-y-2">
              <li><Link href="/signature/ulthera" className="transition-colors hover:text-white">리프팅 센터</Link></li>
              <li><Link href="/signature/total-erase" className="transition-colors hover:text-white">안티에이징</Link></li>
              <li><Link href="/treatment/labiaplasty" className="transition-colors hover:text-white">바디 클리닉</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="mb-5 text-[12px] tracking-[0.15em] text-[#999]">SNS</h6>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors hover:text-white">Instagram</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Youtube</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Kakao Talk</a></li>
            </ul>
          </div>
        </div>
        <div className="f-map lg:col-span-1">
          <h6 className="mb-5 text-[12px] tracking-[0.15em] text-[#999]">오시는 길</h6>
          <p className="text-[14px] text-[#888] leading-relaxed mb-4">
            지하철: 압구정로데오역 3번 출구 도보 5분
            <br />
            버스: 강남대로 정류장 하차
          </p>
          <Link href="/#map" className="inline-block text-[12px] text-[var(--hip-accent)] tracking-wider border-b border-[var(--hip-accent)]/50 pb-0.5 hover:text-white hover:border-white transition-colors">
            지도 보기
          </Link>
        </div>
      </div>
      <div className="f-copy mt-20 border-t border-white/10 pt-8 text-[12px] opacity-50">
        COPYRIGHT © HOMMAGE CLINIC. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
