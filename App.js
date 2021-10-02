import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from "styled-components"
import { useState } from 'react';

const App = () => {
  const [memosTitle, setMemosTitle] = useState("");
  const [memosEnglish, setMemosEnglish] = useState("");
  const [memosJapanese, setMemosJapanese] = useState("");
  const [memosArray, setMemosArray] = useState([]);

  const onClickAdd = () => {
    const newMemosArray = [...memosArray];
    newMemosArray.push({ title: memosTitle, english: memosEnglish, japanese: memosJapanese });
    setMemosArray(newMemosArray);
    setMemosEnglish("");
    setMemosJapanese("");
  };

  const onClickDelete = (index) => {
    const newMemosArray = [...memosArray];
    newMemosArray.splice(index, 1);
    setMemosArray(newMemosArray);
  };

  return (
    <SMain>
      <p>あなたのお気に入りの洋画セリフを記録できるよ!</p>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}
      >
        <TextField id="standard-basic" label="タイトル" variant="standard" value={memosTitle}
          onChange={(e) => setMemosTitle(() => e.target.value)} />
        <TextField id="standard-basic" label="英訳" variant="standard" value={memosEnglish}
          onChange={(e) => setMemosEnglish(() => e.target.value)} />
        <TextField id="standard-basic" label="和訳" variant="standard" value={memosJapanese}
          onChange={(e) => setMemosJapanese(() => e.target.value)} />
        <Stack spacing={2} direction="row">
          <Button variant="outlined" onClick={onClickAdd}>記録</Button>
        </Stack>
      </Box>
      <div>
        {memosArray.map((memo, index) => {
          return (
            <SMemos key={index}>
              <p>タイトル:{memo.title}</p>
              <p>英訳:{memo.english}</p>
              <p>和訳:{memo.japanese}</p>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" onClick={onClickDelete}>削除</Button>
              </Stack>
            </SMemos>
          );
        })}
      </div>
    </SMain>
  );
}

const SMain = styled.div`
margin:0 4%;
display:flex;
flex-direction:column;`;

const SMemos = styled.div`
margin-bottom: 10px;
padding:10px;
border:solid 1px gray;`;

export default App;
