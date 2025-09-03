import Contacts from "./Contacts"
import NavLinks from "./NavLinks"
import PlatformSpecificLinks from "./PlatformSpecificLinks"

function QuickLinks() {
	return(
		<div>
			<Contacts />
			<NavLinks />
			<PlatformSpecificLinks />
		</div>
	)
}

export default QuickLinks;