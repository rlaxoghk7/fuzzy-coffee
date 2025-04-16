# 제목(Header)

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

# 문장(Paragraph)
처음에는 단순히 하늘이 흐린 게 좋았다. 괜히 차분해지는 기분도 들었고, 빗소리 들으면서 걷는 것도 나쁘지 않았다.

# 줄바꿈(Line Breaks) : 스페이스 두번 (띄어쓰기), '<br/>'
처음에는 단순히 하늘이 흐린 게 좋았다.  
괜히 차분해지는 기분도 들었고, 빗소리 들으면서 걷는 것도 나쁘지 않았다.   
하지만 예상보다 빗방울이 굵어졌고, 우산도 없던 나는 결국 온몸이 흠뻑 젖어버렸다.  
옷이 달라붙고, 신발 속 양말이 축축해지자 괜찮다고 생각했던 마음도 서서히 무너졌다.  
그렇게 나는, 낭만이란 결국 상황이 좋을 때만 가능한 사치라는 걸 다시 한 번 깨달았다.

# 강조(Emphasis)
'_'와'_'사이에 글자 넣으면 이텔릭체  
'**'와 '**' 사이에 글자 넣으면 두껍게  
'**_'와'_**' 사이에 글자 넣으면 이텔릭+두껍게  
'~~'와 '~~'사이에 글자 넣으면 취소선  
'<u>'와'</u>'사이에 글자 넣으면 밑줄  

# 목록(List)
1. 순서가 필요한 목록
1. 순서가 필요한 목록
1. 순서가 필요한 목록  
    1. 순서가 있는 목록
    1. 순서가 있는 목록  
        1. 순서가 있는 목록
        1. 순서가 있는 목록
        1. 순서가 있는 목록
    1. 순서가 있는 목록
1. 순서가 필요한 목록

- 순서가 필요하지 않는 목록
    1. 순서가 필요하지 않는 목록
    1. 순서가 필요하지 않는 목록
        - 순서가 필요하지 않는 목록
        - 순서가 필요하지 않는 목록
    1. 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록
- 순서가 필요하지 않는 목록

# 링크(Links)
<a href="https://google.com">GOOGLE</a>  
[GOOGLE](https://google.com)  

<a href="https://naver.com" title="Naver로 이동">NAVER</a>  
[NAVER](https://naver.com "Naver로 이동")

<!-- 마크다운은 target 속성을 제공하지 않으므로 HTML 태그 그대로 사용 -->
<a href="https://naver.com" title="Naver로 이동" target="_blank">NAVER</a>  

# 이미지(Images)
![FUZZY COFFEE ](https://celebrated-douhua-203a1d.netlify.app/images/logo.png)

[![FUZZY COFFEE ](https://celebrated-douhua-203a1d.netlify.app/images/logo.png)](https://celebrated-douhua-203a1d.netlify.app/)

# 인용문(BlockQuote)
남의 말이나 글에서 직접 또는 간접적으로 따온 문장(ex.나무위키)
> Success is not final, failure is not fatal: It is the courage to continue that counts.  
-_Winston Churchill_-

중첩된 인용문 사용 가능
> In the middle of every difficulty lies opportunity.
>> Do what you can, with what you have, where you are.
>>> It always seems impossible until it’s done.
>>>> Happiness depends upon ourselves.

# 인라인(Inline)  코드강조 -> 백틱기호(`)
CSS에서 background 또는 background-image 속성으로 요소에 배경이미지 삽입할 수 있다.  
`Happiness depends upon ourselves.` -> 백틱기호(`)

# 블록(Block) 코드강조 -> 백틱기호(```)
```html
<a href="https://google.com" target='_blank'>GOOGLE</a>
```
```javascript
function func(){
  let a = 'aaa';
  return a;
}
```
```bash
$ git commit -m "Markdown"
```
```Text
Success is not final, failure is not fatal: It is the courage to continue that counts.
```

# 표(Table)
position 속성

값 | 의미 | 기본값
:--|:--:|--:
static | 기준없음 | 0
relative | 요소자신 | X
absolute | 위치 상 부모 요소 | X
fixed | 뷰포트 기준 | X

# 원시 HTML(Raw HTML)
처음에는 단순히 하늘이 흐린 게 좋았다.<br/>
괜히 차분해지는 기분도 들었고, <u>빗소리 들으면서 걷는 것도 나쁘지 않았다.</u> 

처음에는 단순히 하늘이 흐린 게 좋았다.<br/>
괜히 차분해지는 기분도 들었고, <span style="text-decoration:underline">빗소리 들으면서 걷는 것도 나쁘지 않았다.</span>

<a href="https://google.com" target='_blank'>GOOGLE</a>

<img src="https://celebrated-douhua-203a1d.netlify.app/images/logo.png" alt="로고">

# 수평선 (Horizontal Rule)
---
--------------
***
___