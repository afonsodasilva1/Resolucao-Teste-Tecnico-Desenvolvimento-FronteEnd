import { Tabs } from '@mantine/core';
import { FormAddNewDoctor } from '../Form';

export function TabsSteps() {
  return (
    <Tabs defaultValue="Information" color='#285430' >
      <Tabs.List>
        <Tabs.Tab value="Information">
          <div className='flex text-mygreen-800 gap-2'>
            <h1 className='text-2xl font-bold'>
              1
            </h1>
            <div className='flex flex-col text-end'>
              <span className='font-bold text-[14px] mt-3'>
                Basic Information
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab value="Details">
          <div className='flex text-mygray-500 gap-2'>
            <h1 className='text-2xl font-semibold'>
              2
            </h1>
            <div className='flex flex-col text-end'>
              <span className='text-[14px] mt-3 font-semibold'>
                Enter Details
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab value="Services">
          <div className='flex text-mygray-500 gap-2'>
            <h1 className='text-2xl font-semibold'>
              3
            </h1>
            <div className='flex flex-col text-end'>
              <span className='text-[14px] mt-3 font-semibold'>
                Select Services
              </span>
            </div>
          </div>

        </Tabs.Tab>
        <Tabs.Tab value="Submit">
          <div className='flex text-mygray-500 gap-2'>
            <h1 className='text-2xl font-semibold'>
              4
            </h1>
            <div className='flex flex-col text-end'>
              <span className='text-[14px] mt-3 font-semibold'>
                Review and Submit
              </span>
            </div>
          </div>
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Information">
        <FormAddNewDoctor />
      </Tabs.Panel>
      <Tabs.Panel value="Details">
        Details content
      </Tabs.Panel>
      <Tabs.Panel value="Services">
        Services content
      </Tabs.Panel>
      <Tabs.Panel value="Submit">
        Subimit content
      </Tabs.Panel>
    </Tabs>
  );
}
