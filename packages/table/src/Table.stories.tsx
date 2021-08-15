import { Story, Meta } from '@storybook/react'
import LdTable from './LdTable'
import LdThead from './LdThead'
import LdTbody from './LdTbody'
import LdTfoot from './LdTfoot'
import LdTr from './LdTr'
import LdTd from './LdTd'
import LdTh from './LdTh'

import { LdTdProps, TextColor, Align } from './types'

const getOptions = (enumObject: Record<string, string | number>) =>
  Object.values(enumObject).filter((value) => typeof value === 'string')

export default {
  component: LdTable,
  title: 'Table/LdTable',
  parameters: {
    layout: 'centered',
  },
  args: {
    textColor: 'primary',
    align: 'left',
  },
  argTypes: {
    textColor: {
      options: getOptions(TextColor),
      control: 'inline-radio',
    },
    align: {
      options: getOptions(Align),
      control: 'inline-radio',
    },
  },
} as Meta

export const Base: Story<LdTdProps> = (props) => {
  return (
    <LdTable style={{ width: 600, padding: '20px' }}>
      <LdThead>
        <LdTr>
          <LdTh {...props}>Date | Type</LdTh>
          <LdTh {...props}>Change</LdTh>
          <LdTh {...props}>Balance</LdTh>
          <LdTh {...props}>APR</LdTh>
        </LdTr>
      </LdThead>
      <LdTbody>
        <LdTr>
          <LdTd {...props}>
            01-13-2021
            <br />
            Stake
          </LdTd>
          <LdTd {...props}>
            + 0.000007452
            <br />+ $0.02
          </LdTd>
          <LdTd {...props}>
            10.00038581
            <br />
            $18,912.80
          </LdTd>
          <LdTd {...props}>2.4%</LdTd>
        </LdTr>
        <LdTr>
          <LdTd {...props}>
            01-13-2021
            <br />
            Stake
          </LdTd>
          <LdTd {...props}>
            + 0.000007452
            <br />+ $0.02
          </LdTd>
          <LdTd {...props}>
            10.00038581
            <br />
            $18,912.80
          </LdTd>
          <LdTd {...props}>2.4%</LdTd>
        </LdTr>
      </LdTbody>
      <LdTfoot>
        <LdTr>
          <LdTh {...props}>Date | Type</LdTh>
          <LdTh {...props}>Change</LdTh>
          <LdTh {...props}>Balance</LdTh>
          <LdTh {...props}>APR</LdTh>
        </LdTr>
      </LdTfoot>
    </LdTable>
  )
}