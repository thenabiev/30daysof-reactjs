
## Available Scripts
Fayl githuba yüklənərkən node-modules gitignore faylının içində qeyd olunduğu üçün node modules faylı olmayacaq. 
Bu səbəbdən proqramın düzgün çalışması üçün terminalda aşağıdakı commandı yazmalıyıq:
### `npm install`
Daha sonra package-json faylındakı scriptlər node modules başlığı altında yüklənmiş vəziyyətdə olacaq. 
Artıq proqram çalışmağa hazırdır.
Altdakı command ilə faylı run edirik

### `npm start`
 [http://localhost:3000](http://localhost:3000) portu altında faylımız çalışmağa başlayacaq 
Server ilə bağlantı olmadığı üçün datalar fetch olunmayacaq . Server ilə bağlantı üçün aşağıdakı commandı CMD terminalına yazıb json-server ilə əlaqə qururuq . (Bu command üçün Powershell terminalını işlətməyi məsləhət görmürəm, bəzi xətalar ortay çıxa bilər)

### `json-server --watch`
Datalar (http://localhost:3004)portunda açılmış serverdən çəkiləcək
