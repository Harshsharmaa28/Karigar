'use client'

import { BiSolidUser} from "react-icons/bi";
import {RiLockPasswordFill} from "react-icons/ri";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Login(){

    //toast messages
    const showToastSuccess = () => {

    };
    const showToastNotFound= (body) => {
      if(body.isSuccess){
        toast.success('LoggedIn Successfully!', {
            position: toast.POSITION.TOP_RIGHT
        });
      }
      else{
          toast.error(body.message, {
              position: toast.POSITION.TOP_RIGHT
          });
      }
    };
    const showToastFailure= () => {
        toast.error('Something went wrong', {
            position: toast.POSITION.TOP_RIGHT
        });
    };


    const config= {
        method: 'post',
        headers:{
            "Content-type":"application/json"
        },
    }


    const handleSubmit = async (e) =>{
        e.preventDefault();

            const id = e.target.querySelector('#_uid').value;
        const password = e.target.querySelector('#password').value;


        console.log("frontend data: ",id," password: ",password);
        let payload = {
            username:id,
            password:password,
        }

        config.body = JSON.stringify(payload);

        console.log('changes: ',config.body);


       try{
        //validations?

           let postData = await fetch(`http://localhost:3021/login`,config);
           // console.log(awaitpostData.json());
           let postResponse = await postData.json();
           console.log('res: ',postResponse);
           showToastNotFound(postResponse);

       }catch (e) {
           showToastFailure();
           console.log("Error: ",e.message);
           throw new Error(e);


       }
        //toast


    }


    return(
        <>
            <ToastContainer/>

                <div className={'w-[100vw] h-[100vh] flex justify-center items-center'}>
                    <div className={'w-[60%] h-[70%] flex  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border border-solid  rounded-2xl '}>

                        <div className={'w-[50%] h-[100%]'}>
                            <p className={'w-[100%] text-2xl font-black relative top-[3rem] text-center'}>Sign In</p>

                        <form className={'w-[100%] relative top-[5rem]'} enctype="application/x-www-form-urlencoded" onSubmit={handleSubmit}>

                                <div className={'h-[1.7rem] w-[75%] m-7 flex border-b-2 border-solid border-black  '}>
                                    <label htmlFor={'_uid'} className={' my-auto mx-2 pb-2'}><BiSolidUser /></label>
                                    <input type={'text'} className={'mx-2 p-2 pb-3 focus:outline-none  '} placeholder={'Id'} id={'_uid'} name={'naam'}></input>
                                </div>

                                <div className={'h-[1.7rem] w-[75%] m-7 flex border-b-2 border-solid border-black  '}>
                                    <label htmlFor={'password'} className={' my-auto mx-2 pb-2'} ><RiLockPasswordFill /></label>
                                    <input type={'password'} className={'mx-2 p-2 pb-3 focus:outline-none  '} placeholder={'Enter Password'} id={'password'} name={'password'}></input>
                                </div>

                                <div className={'h-auto m-7 w-[90%] mx-auto text-sl my-4 text-center text-semibold text-white relative top-[3rem]'}>
                                    <input type={'submit'} className=" w-[80%] hover:cursor-pointer rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-blue-800 border-blue-900 text-white  hover:border-indigo-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500" value={'Sign In'}></input>

                                </div>

                            </form>


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