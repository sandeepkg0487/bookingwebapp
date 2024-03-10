
import { Button, FileInput, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react'
import Placeupload from './Placeupload';


const Addplaces = () => {
  return (
    <div className="max-w-xl  sm:max-w-4xl mx-auto text-center mt-2 sm:px-6 lg:px-8 h-full">


      <form className="flex max-w-md flex-col gap-4">
        <div>
          <TextInput id="text" type="text" placeholder="Name Of Place" required />
        </div>
        <div>
        <Textarea id="comment" placeholder="discription..." required rows={4} />
         
        </div>
        <div>
         
          <TextInput id="large" type="text" required placeholder='price ' />
        </div>

        <Placeupload />
        <Button type="submit">Submit</Button>
      </form>

    </div>

  )
}

export default Addplaces
