import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const initialValuse = {username:'',mailaddres:'',password:''};
  // stateを何個も作ることをなくすために、オブジェクトを作成
  const [formvalues,setformvalues] =useState(initialValuse);
  const [formErros,setformErros] =useState({});
  const [issubmit,setissubmit] =useState(false);
  // エラーが起きたら、起きたエラーをこのオブジェクトに入れていく。
  // 配列にすると値しか入れることができないが、オブジェクトなら、keyと値を入れることができる


const handChenge = (e) =>{
  const {name,value} = e.target;
  setformvalues({...formvalues, [name]:value})
  // []で囲むことによってプロパティにアクセスすることができるようになる。
}
const handlesubmit = (e) =>{
e.preventDefault();
// 更新しないでAPIを叩きにいったりする
setformErros(validate(formvalues));
setissubmit(true);
}

const validate = (values) =>{
console.log(values);
const erros = {};
const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
if(!values.username){
  erros.username = 'ユーザー名を入力してください';
  console.log('aaa');
};
if(!values.mailaddres){
  erros.mailaddres = '正しいメールアドレスを入力してください'
}
else if(regex.test(values.mailaddres)){
  // text()の言う関数がある。！ついているから、テストが当てはまった時は下になる。
  erros.mailaddres = '正しいメールアドレスを入力してください'
};
if(!values.password){
  erros.password = '４文字以上、１５文字以上の文字を入力してください';
}
else if(values.password.length < 4){
  erros.password = '４文字以上、１５文字以上の文字を入力してください'
}
else if(values.password.length > 15){
  erros.password = '４文字以上、１５文字以上の文字を入力してください'
};
return erros;
// ここで返してあげることで、validateに入る。
}
// console.log(validate);
return(
    <div className="formCONtainer">
      <form action="" onSubmit={(e) =>handlesubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
        <div className="formField">
          <label htmlFor="">ユーザー名</label>
          <input type="text"placeholder='ユーザー名'name='username' onChange={(e) =>handChenge(e)}/>
        </div>
        <p className='erroMsg'>{formErros.username}</p>
        <div className="formField">
          <label htmlFor="">メール</label>
          <input type="text"placeholder='メール'name='mailaddres'onChange={(e) =>handChenge(e)}/>
        </div>
        <p className='erroMsg'>{formErros.mailaddres}</p>
        <div className="formField">
          <label htmlFor="">パスワード</label>
          <input type="text"placeholder='パスワード'name='password'onChange={(e) =>handChenge(e)}/>
        </div>
        <p className='erroMsg'>{formErros.password}</p>
        <Button variant="contained" className='btn' type='submit'>
          ログイン
        </Button>
        {Object.keys(formErros).length === 0 && issubmit && ( <div className='magOK'>ログインに成功しました</div> )}
        </div>
      </form>
    </div>
)
}
export default App;