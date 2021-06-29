import { h } from 'preact';

import DayNames from '@src/components/daygrid/dayNames';
import { TemplateMonthDayName } from '@src/model';
import { getGridInfo } from '@src/time/datetime';

import { ProviderWrapper } from '@stories/util/providerWrapper';
import { Story } from '@storybook/preact';

export default { title: 'DayNames' };

interface DayNamesStory {
  dayNames: TemplateMonthDayName[];
  marginLeft?: number;
}

const Template: Story<DayNamesStory> = ({ dayNames, marginLeft }) => {
  const gridInfo = getGridInfo(dayNames.length, true, 0, true);

  return (
    <ProviderWrapper>
      <DayNames
        templateType="monthDayname"
        dayNames={dayNames}
        marginLeft={marginLeft}
        gridInfo={gridInfo}
      />
    </ProviderWrapper>
  );
};

const oneDayName = [
  {
    label: 'Mon',
    day: 1,
  },
];

const threeDayNames = [
  {
    label: 'Mon',
    day: 1,
  },
  {
    label: 'Wed',
    day: 3,
  },
  {
    label: 'Fri',
    day: 5,
  },
];

export const oneDay = Template.bind({});
oneDay.args = {
  dayNames: oneDayName,
};

export const threeDays = Template.bind({});
threeDays.args = {
  dayNames: threeDayNames,
};

export const oneDayWithMargin = Template.bind({});
oneDayWithMargin.args = {
  dayNames: oneDayName,
  marginLeft: 60,
};

export const threeDaysWithMargin = Template.bind({});
threeDaysWithMargin.args = {
  dayNames: threeDayNames,
  marginLeft: 60,
};
