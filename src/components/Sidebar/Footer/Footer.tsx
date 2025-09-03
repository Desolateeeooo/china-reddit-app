import Logo from "@/components/Navigation/Logo";
import QuickLinks from "./QuickLinks/QuickLinks";
import LanguageButton from "./LanguageButton";

function Footer() {
	return(
		<footer>
			<Logo />
			<h1>China-Reddit</h1>
			<p>
				Your gateway to Chinese culture, travel, food, and language
				through the lens of Reddit communities.
			</p>
			<QuickLinks />
			<div id="lang-btn">
				<LanguageButton />
			</div>
			<h5>2025 China-Reddit. All Rights Reserved</h5>
		</footer>
	)
}

export default Footer;