ex04: 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 애플리케이션의 모듈(js, css, image, font)들의 의존성을 분석해서 하나의 JS 파일로 묶는 도구
                                                webpach이 이런것들을 읽어내서 자바 스크립트로 변환한다.
2. 하나의 JS 파일을 번들(bundle)이라고 하고 묶는 작업을 번들링(bundling)이라고 한다.
3. 번들링은 단순히 모듈들을 하나의 파일로 묶는 작업만을 의미 하지는 않는다.(빌드 작업)

4. 빌드 작업
    1) linting(ESLint, 문법 체크) 작업
    2) document 작업(JSDoc) 작업
    3) test(Mocha, jest) 작업
    4) 난독화/ 압축작업(Uglyfy) 작업
    5) 번들링
5. 자바스크립트 뿐만 아니라 다양한 에셋(image, css, font)들도 모듈로 취급한다.

6. 설치 
    $ npm i -D webpack webpack-cli 
    $ npm .\node_modules .bin\webpack --version   //버전 확인
    $ npx webpack --version                                         //뒤에 webpack 버전 확인과 같다.


7. package.jsonscripting("build" stage)

8. $npm run build 