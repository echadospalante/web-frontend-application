import { Fragment } from 'react';

import { PlacesType, Tooltip } from 'react-tooltip';

type IconTooltipProps = {
  tooltipId: string;
  tooltipHtml: string;
  tooltipPlace: PlacesType;
  iconClassName: string;
};

const IconTooltip = ({
  iconClassName,
  tooltipHtml,
  tooltipId,
  tooltipPlace,
}: IconTooltipProps) => {
  return (
    <Fragment>
      <Tooltip id={tooltipId} />
      <i
        className={iconClassName}
        data-tooltip-id={tooltipId}
        data-tooltip-html={tooltipHtml}
        data-tooltip-place={tooltipPlace}
      ></i>
    </Fragment>
  );
};

export default IconTooltip;
