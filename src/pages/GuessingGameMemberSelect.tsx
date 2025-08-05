import React from 'react'
import MemberSelector from '../assets/components/MemberSelector'

const HigherLowerMemberSelect = () => {
  return (
    <div className="container">
        <h1>Select a channel</h1>
        <h3 className='gen-text'>Gen 0</h3>
        <div className='flex-row member-select-generation'>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_kT9PiLS8BWANuBdGG_-GHsNZxFqmF0YjMnzK55jISdca4=s176-c-k-c0x00ffffff-no-rj-mo" memberName='sora'/>
          <MemberSelector imgSource="https://yt3.ggpht.com/H8pRHxQm4-FjRl9XUFn9UQbJhVcj5PIvwDW6o7ZlBTRj2bgVP5xonQEl36H-O6NHaWmbP1zaxg=s176-c-k-c0x00ffffff-no-rj-mo" memberName='roboco'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/b8EKl_i-e2dinoparyhUJEaRhInlSWwm-dZX0oIq-x1mUvQga530G_PIdutlSNkGKEAyX9aaBQ=s176-c-k-c0x00ffffff-no-rj-mo" memberName='miko'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_kLDBK5ksSvk5-XJ6S8e0kWfjy7mVl3jyUkgDeMQ7rlCpU=s176-c-k-c0x00ffffff-no-rj-mo" memberName='suisei'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/MZ-G4UCBhmwBgdgoq6h3OLFXfnd3Io4xV8TUOyfCu7TMvHTIL5-VMgGRlA0FfCqqCq2oR6RrXos=s176-c-k-c0x00ffffff-no-rj-mo" memberName='azki'/>
        </div>
        <h3 className='gen-text'>Gen 1</h3>
        <div className='flex-row member-select-generation'>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_mGXEeXXCCPh-sl2jKYbYpLBuCsjEGDgJaL5RQziYhyugQ=s176-c-k-c0x00ffffff-no-rj-mo" memberName='fubuki'/>
          <MemberSelector imgSource="https://yt3.ggpht.com/LZBvU0s_S-xi7fHmeab_iA8ztfGimxzisUBMODGKaIEx3r3R-tIDReiX3SlmbH2showigElJ=s176-c-k-c0x00ffffff-no-rj-mo" memberName='matsuri'/>
          <MemberSelector imgSource="https://yt3.ggpht.com/ecW_DT7IKBcfKJ1qioYiyU_Iq6EB4_bCZpaG4srWPkEZRsIAiYguEvh7_nELEJqPnbjAktVj6Q=s176-c-k-c0x00ffffff-no-rj-mo" memberName='haachama'/>
          <MemberSelector imgSource="https://yt3.ggpht.com/0Nx9jWdjiUrkizCVCDZg_MasdF6b85DAsQATmAkNC2A8b3Y89vXlnSDZ_v1fM_X4w3088sJnmA=s176-c-k-c0x00ffffff-no-rj-mo" memberName='aki'/>
        </div>
        <h3 className='gen-text'>Gen 2</h3>
        <div className='flex-row member-select-generation'>
          <MemberSelector imgSource="https://yt3.ggpht.com/3CeLWGYb6cLUywTJzNt-UpITviNxeGNvtjhIqbV-AIybCqCoFw9onWtg91bjwpqvfEP9mfqIR4Q=s176-c-k-c0x00ffffff-no-rj-mo" memberName='nakiri'/>
          <MemberSelector imgSource="https://yt3.ggpht.com/gv-5tmPSiFipkP01atgnCS6WwdxzUxfermmqGw_UhuDNtRFmbdb2NALcL6rR0LxaM5JX9JhE9g=s176-c-k-c0x00ffffff-no-rj-mo" memberName='choco'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_k5mjdt1wcbaYCXKwmDpVXmSGtOc-LH3WjIyUHVC4soP28=s176-c-k-c0x00ffffff-no-rj-mo" memberName='subaru'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_kaZLtKaya9TSJr3M4lpzV95R2rWdQtGk67fwedroUfSnE=s176-c-k-c0x00ffffff-no-rj-mo" memberName='aqua'/>
          <MemberSelector imgSource="https://yt3.ggpht.com/K91NQLuy_JMQ65n-Opf0Q2FZBO3yOURnMRusO7o5DTjaJ1QVtP-ANN4lehK57X4KXpcI2MiRig=s176-c-k-c0x00ffffff-no-rj-mo" memberName='shion'/>
        </div>
        <h3 className='gen-text'>Gamers</h3>
        <div className='flex-row member-select-generation'>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/JV8VdQFA7eZk5H1cRxHyIdLKQ5wD6EBywjxLzrne2EpY9LSiVgtapvh0iQA6plVNxdIKNxK0NRU=s176-c-k-c0x00ffffff-no-rj-mo" memberName='mio'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/ytc/AIdro_nrS6tFctvjyWv1mKzKBIetHJBfpqwHOpvRFc3KU2P_5yc=s176-c-k-c0x00ffffff-no-rj-mo" memberName='korone'/>
          <MemberSelector imgSource="https://yt3.googleusercontent.com/oD8ISaA35737mg-lt5mYSfOIXmjCeHYcSFFpTQn4AVMkqiyzrMle_THvX6NdfSxbjUO6fQ6_wg=s176-c-k-c0x00ffffff-no-rj-mo" memberName='okayu'/>
        </div>
      </div>
  )
}

export default HigherLowerMemberSelect