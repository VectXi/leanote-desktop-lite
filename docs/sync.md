同步分为push和pull，
在应用启动的时候，进行全量同步，包括push和pull；之后每隔10s，检查本地usn，push变化的笔记本、笔记和标签。

有一种情况会发生冲突，服务器已经更新，但是本地没有及时pull下来，localUsn < remoteSsn，这时在本地修改会发生冲突。
evernote的解决方案是，将本地的修改放进一个临时生成的笔记本中，然后用服务器的数据覆盖本地的数据。
由于冲突的情况比较罕见，目前暂不处理这种情况。如果在服务器的数据发生变化，重启app即可同步到最新状态