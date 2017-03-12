import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const iconStyles = {
  marginRight: 24,
  width: 48,
  height: 48,
};
const Test = () => (
  <div>
    <Badge
      badgeContent={10}
      primary={true}
      badgeStyle={{top: 20, right: 20}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon />
      </IconButton>
    </Badge>
    <IconButton tooltip="Home Домой">
      <ActionHome style={iconStyles} />
    </IconButton>

  </div>
);

export default Test;