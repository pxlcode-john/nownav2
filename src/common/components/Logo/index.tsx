import Image from "next/image"
import nownaLogo from "assets/nowna.svg"

export const Logo = () => <Image width={0} height={0} className="h-12 w-auto" src={nownaLogo} alt="Nowna" />

export default Logo
