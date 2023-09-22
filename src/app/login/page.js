import { BiSolidUser} from "react-icons/bi";
import {RiLockPasswordFill} from "react-icons/ri";


export default function Login(){


    return(
        <>

                <div className={'w-[100vw] h-[100vh] flex justify-center items-center'}>
                    <div className={'w-[60%] h-[70%] flex  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border border-solid  rounded-2xl '}>

                        <div className={'w-[50%] h-[100%]'}>
                            <p className={'w-[100%] text-2xl font-black relative top-[3rem] text-center'}>Sign In</p>

                            <form className={'w-[100%] relative top-[5rem]'}>

                                <div className={'h-[1.7rem] w-[75%] m-7 flex border-b-2 border-solid border-black  '}>
                                    <label htmlFor={'naam'} className={' my-auto mx-2 pb-2'}><BiSolidUser /></label>
                                    <input type={'text'} className={'mx-2 p-2 pb-3 focus:outline-none  '} placeholder={'Name'} id={'naam'} name={'naam'}></input>
                                </div>

                                {/*<div className={'h-[1.7rem] w-[75%] m-7 flex border-b-2 border-solid border-black  '}>*/}
                                {/*    <label htmlFor={'phone'} className={' my-auto mx-2 pb-2'}><BiSolidPhone /></label>*/}
                                {/*    <input type={'number'} className={'mx-2 p-2 pb-3 focus:outline-none  '} placeholder={'Phone No.'} id={'phone'} name={'phone'}></input>*/}
                                {/*</div>*/}

                                {/*verify your aadhar*/}
                                {/*<div className={'h-[1.7rem] m-7 w-[100%] my-2 flex  justify-between'} >*/}
                                {/*    <div className={'h-[1.7rem] w-[75%] flex border-b-2 border-solid border-black  '}>*/}
                                {/*        <label htmlFor={'aadhar'} className={' my-auto mx-2 pb-2'}><BiSolidUser /></label>*/}
                                {/*        <input type={'text'} className={'mx-2 pb-2 focus:outline-none  '} placeholder={'Aadhar number - XXXXXXXXXXXX'} id={'aadhar'} name={'aadhar'} maxLength={12}></input>*/}
                                {/*    </div>*/}

                                {/*    <button className={"w-[25%] h-[1.9rem] mb-2 flex justify-center items-center text-md py-auto rounded px-3 mx-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white"}>*/}
                                {/*        Verify*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                                <div className={'h-[1.7rem] w-[75%] m-7 flex border-b-2 border-solid border-black  '}>
                                    <label htmlFor={'password'} className={' my-auto mx-2 pb-2'} ><RiLockPasswordFill /></label>
                                    <input type={'number'} className={'mx-2 p-2 pb-3 focus:outline-none  '} placeholder={'Enter Password'} id={'password'} name={'password'}></input>
                                </div>

                                {/*<div className={'h-[1.7rem] w-[75%] m-7 flex border-b-2 border-solid border-black  '}>*/}
                                {/*    <label htmlFor={'c_password'} className={' my-auto mx-2 pb-2'} ><RiLockPasswordFill /></label>*/}
                                {/*    <input type={'number'} className={'mx-2 p-2 pb-3 focus:outline-none  '} placeholder={'Confirm Password'} id={'c_password'} name={'c_password'}></input>*/}
                                {/*</div>*/}

                                <div className={'h-auto m-7 w-[90%] mx-auto text-sl my-4 text-center text-semibold text-white relative top-[3rem]'}>
                                    <input type={'submit'} className=" w-[80%] hover:cursor-pointer rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white  hover:border-indigo-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500" value={'Sign In'}></input>

                                </div>

                            </form>

                            {/* <div className='w-[100%] text-center'>
              <p>or log in with</p>
              <div>
                {/* google logo */}
                            {/* <Image
                  src='https://cdn.worldvectorlogo.com/logos/google-g-2015.svg'
                  width={40}
                  height={40}
                  className='mx-auto my-2'
                ></Image> */}
                            {/* </div>
            </div> */}
                        </div>



            <div className="w-[50%] h-[100%] ml-11 my-auto ">
                    <div className="hidden md:block w-[100%] h-full bg-[url('https://i.imgur.com/jH2ejCZ.jpg')] bg-contain bg-no-repeat bg-center py-10 px-10 border-r border-solid rounded-r-2xl">

                        </div>
            </div>
                    </div>

                </div>


        </>
    )

}