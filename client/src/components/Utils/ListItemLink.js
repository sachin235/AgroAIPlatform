import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

function ListItemLink(props) {
	const { icon, primary, to } = props;

	const renderLink = React.useMemo(
		() => React.forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />),
		[to]
	);

	return (
		<li>
			<ListItem button component={renderLink}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={primary} />
			</ListItem>
		</li>
	);
}

export default ListItemLink;
